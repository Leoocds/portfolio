// Illustrative mock of the embeds SantosBOT posts (titles taken from the bot's source).
const embeds = [
  { color: "#ffffff", title: "ℹ️ INFORMAÇÕES DO JOGO", lines: ["Santos x Adversário", "Campeonato Brasileiro · Vila Belmiro", "Domingo, 16h"] },
  { color: "#57f287", title: "▶️ BOLA ROLANDO!", lines: ["O Santos já está em campo!"] },
];

export default function DiscordPreview() {
  return (
    <div className="flex w-full flex-col justify-center gap-3 overflow-hidden rounded border border-rule bg-[#313338] p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-black">S</div>
        <div className="min-w-0 flex-1">
          <p className="text-sm">
            <span className="font-semibold text-white">Santos Bot</span>
            <span className="ml-1.5 rounded bg-[#5865f2] px-1 py-px text-[10px] font-semibold text-white">APP</span>
            <span className="ml-2 text-xs text-[#949ba4]">hoje às 15:00</span>
          </p>
          <p className="mt-0.5 text-sm text-[#c9cdfb]">@Santista</p>
          <div className="mt-2 flex flex-col gap-2">
            {embeds.map((e) => (
              <div key={e.title} className="max-w-sm rounded border-l-4 bg-[#2b2d31] px-3 py-2.5" style={{ borderColor: e.color }}>
                <p className="text-sm font-semibold text-white">{e.title}</p>
                {e.lines.map((l) => (
                  <p key={l} className="text-[13px] text-[#dbdee1]">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
