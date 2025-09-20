import type { QRCode, QRCodeInput } from '@/supabase/types';
import { supabase } from '@/supabase/supabaseClient';

export const createQr = async ( input: QRCodeInput ): Promise<QRCode> => {

    const { data, error } = await supabase.from('qrs').insert(input).select().single();

    if (error) throw new Error(`Error creating qrcode: ${error.message}`);
    if (!data) throw new Error('No QR code returned from insert.');

    return data as QRCode;
};

export const getQRs = async (user_id: string): Promise<QRCode[]> => {
    const { data, error } = await supabase.from('qrs').select('*').eq('user_id', user_id);   

    if (error) throw new Error(`Error geting qrcodes: ${error.message}`);
    if (!data) throw new Error('No QR code returned from select.');

    return data as QRCode[];
}

export const deleteQR = async (qr_id: number): Promise<number | null> => {
    const { data, error } = await supabase
        .from('qrs')
        .delete()
        .eq('id', qr_id)
        .select('id') // <-- selecciona el id borrado
        .single();

    if (error) throw new Error(`Error deleting qrcode: ${error.message}`);
    if (!data) return null;

    return data.id;
}