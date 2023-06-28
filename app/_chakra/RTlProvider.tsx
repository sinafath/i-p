import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";
 
import { useRouter } from 'next/navigation'
import { ReactNode } from "react";

type RtlProvider = {
  children: ReactNode
}
// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};

function RtlProvider({ children }: RtlProvider) {
  const { locale } = useRouter();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}> {children}</CacheProvider>;
}
export default RtlProvider;
