// Mock of the embeds SantosBOT posts (titles taken from the bot's source), used as the project cover.
const embeds = [
  { color: "#ffffff", title: "ℹ️ INFORMAÇÕES DO JOGO", lines: ["Santos x Adversário", "Campeonato Brasileiro · Vila Belmiro"] },
  { color: "#57f287", title: "▶️ BOLA ROLANDO!", lines: ["O Santos já está em campo!"] },
];

export default function DiscordPreview() {
  return (
    <div className="flex h-full w-full items-center bg-[#313338] px-5 sm:px-8">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
            <rect x="4" y="8" width="16" height="12" rx="3" />
            <path d="M12 4v4M9 13v1M15 13v1" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm">
            <span className="font-semibold text-white">Santos Bot</span>
            <span className="ml-1.5 rounded bg-[#5865f2] px-1 py-px text-[10px] font-semibold text-white">APP</span>
            <span className="ml-2 text-xs text-[#949ba4]">hoje às 15:00</span>
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {embeds.map((e) => (
              <div key={e.title} className="rounded border-l-4 bg-[#2b2d31] px-3 py-2" style={{ borderColor: e.color }}>
                <p className="text-[13px] font-semibold text-white">{e.title}</p>
                {e.lines.map((l) => (
                  <p key={l} className="text-xs text-[#dbdee1]">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
