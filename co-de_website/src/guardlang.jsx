"use client";

import { useParams } from "next/navigation";

export const useLangPath = () => {
  const params = useParams();
  const lang = params?.lang || 'th'; 

  return (path) => `/${lang}${path}`;
};