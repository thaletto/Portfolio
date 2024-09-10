import { supabase } from "@/supabase/client";

export function getPublicUrl(filePath: string) {
  const { data } = supabase.storage.from("assets").getPublicUrl(filePath);
  return data.publicUrl;
};