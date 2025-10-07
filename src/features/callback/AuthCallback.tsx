/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/supabaseClient";

export default function AuthCallback() {
	const [status, setStatus] = useState<
		"loading" | "success" | "error" | "no-session"
	>("loading");
	const [message, setMessage] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const params = new URLSearchParams(window.location.search);
				const redirectFromQuery =
					params.get("redirectTo") ??
					params.get("redirect_to") ??
					params.get("redirect") ??
					null;

				// 1) Intentamos el intercambio (método correcto en v2)
				const { data, error } = await supabase.auth.exchangeCodeForSession(
					window.location.href
				);

				// DEBUG: imprime para entender qué devolvió Supabase
				console.debug("exchangeCodeForSession ->", { data, error });

				// Si exchange devolvió sesión explícita, la usamos (incluso si vino con 'error')
				if (data?.session) {
					setStatus("success");
					setMessage("Correo confirmado. Redirigiendo...");
					// Pequeña espera para que los listeners tengan tiempo de crear profile si procede
					await new Promise((res) => setTimeout(res, 600));
					navigate(redirectFromQuery ?? "/dashboard");
					return;
				}

				// 2) Si no hay sesión aquí, comprobamos si ya existe sesión en el cliente
				const { data: currentSessionResp, error: getSessionErr } =
					await supabase.auth.getSession();

				console.debug("getSession ->", { currentSessionResp, getSessionErr });

				if (currentSessionResp?.session) {
					// Ya hay sesión almacenada (otro listener la guardó)
					setStatus("success");
					setMessage("Correo confirmado. Redirigiendo...");
					await new Promise((res) => setTimeout(res, 600));
					navigate(redirectFromQuery ?? "/dashboard");
					return;
				}

				// 3) Si no hay sesión en ninguna parte, diferenciamos entre "no-session" y "error"
				if (error) {
					// Si hubo error de intercambio y no hay sesión, mostramos error con info
					console.error("exchangeCodeForSession error:", error);
					setStatus("error");
					setMessage(
						error.message ??
						"Error verificando la sesión. El enlace puede haber expirado o ya fue usado."
					);
					return;
				}

				// Si no hubo error pero tampoco hay session -> no-session
				setStatus("no-session");
				setMessage(
					"No se detectó sesión. Asegúrate de usar el enlace completo enviado al correo."
				);
			} catch (err: any) {
				console.error("AuthCallback unexpected error:", err);
				setStatus("error");
				setMessage(err?.message ?? "Error inesperado durante la verificación.");
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 text-center">
				{status === "loading" && (
					<>
						<div className="animate-spin mb-6 inline-block w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full" />
						<h2 className="text-lg font-semibold text-gray-800 mb-2">
							Verificando tu cuenta…
						</h2>
						<p className="text-sm text-gray-500">
							Estamos procesando el enlace de confirmación.
						</p>
					</>
				)}

				{status === "success" && (
					<>
						<h2 className="text-xl font-semibold text-green-600 mb-2">
							¡Correo confirmado!
						</h2>
						<p className="text-sm text-gray-600 mb-4">{message}</p>
						<p className="text-xs text-gray-400">
							Si no redirige automáticamente, haz click en el botón.
						</p>
						<div className="mt-4">
							<button
								onClick={() => navigate("/dashboard")}
								className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
							>
								Ir al dashboard
							</button>
						</div>
					</>
				)}

				{status === "no-session" && (
					<>
						<h2 className="text-lg font-medium text-yellow-600 mb-2">
							No se detectó sesión
						</h2>
						<p className="text-sm text-gray-600 mb-4">
							{message ?? "El enlace puede haber expirado o ya fue usado."}
						</p>
						<div className="flex justify-center gap-3">
							<button
								onClick={() => navigate("/signin")}
								className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
							>
								Ir a iniciar sesión
							</button>
							<button
								onClick={() => (window.location.href = "/")}
								className="px-4 py-2 rounded-lg border text-sm"
							>
								Volver al inicio
							</button>
						</div>
					</>
				)}

				{status === "error" && (
					<>
						<h2 className="text-lg font-medium text-red-600 mb-2">
							Error de verificación
						</h2>
						<p className="text-sm text-gray-600 mb-4">
							{message ?? "Ocurrió un error inesperado."}
						</p>
						<div className="flex justify-center gap-3">
							<button
								onClick={() => navigate("/signin")}
								className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
							>
								Intentar iniciar sesión
							</button>
							<button
								onClick={() => (window.location.href = "/")}
								className="px-4 py-2 rounded-lg border text-sm"
							>
								Volver al inicio
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
