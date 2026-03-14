interface RtpRow {
  parameter: string;
  value: string;
}

interface RtpTableProps {
  rows: RtpRow[];
  caption?: string;
}

/**
 * RTP/spec table for topical authority and snippet optimization.
 */
export function RtpTable({ rows, caption }: RtpTableProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-[12px] bg-white/[0.05] shadow-glass">
      <table className="w-full border-collapse text-left">
        {caption && (
          <caption className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th scope="col" className="px-4 py-3 text-sm font-semibold text-white">
              Parameter
            </th>
            <th scope="col" className="px-4 py-3 text-sm font-semibold text-white">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/5 last:border-b-0 even:bg-white/[0.03]"
            >
              <td className="px-4 py-3 text-sm text-white/70">
                {row.parameter}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-white">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
