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
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.04]">
      <table className="w-full border-collapse text-left">
        {caption && (
          <caption className="border-b border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.04]">
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
              className="border-b border-white/[0.05] last:border-b-0 even:bg-white/[0.03]"
            >
              <td className="px-4 py-3 text-sm text-slate-300">
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
