import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-black border-t border-white/[0.06] px-6 py-12">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <img src="/logo.png" alt="nServe" className="h-14 w-auto object-contain" />
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} nServe. {t("allRights")}</p>
      </div>
      <br /><br /><br /><br />
    </footer>
  );
}
