import type { QRCode, QRCodeInput } from '@/supabase/types';
import { supabase } from '@/supabase/supabaseClient';

export const createQr = async (
    input: QRCodeInput,

): Promise<QRCode> => {

    const { data, error } = await supabase.from('qrs').insert(input).select().single();

    if (error) throw new Error(`Error creating qrcode: ${error.message}`);
    if (!data) throw new Error('No QR code returned from insert.');

    return data as QRCode;
};
