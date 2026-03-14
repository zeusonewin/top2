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
    <figure className="my-8 overflow-hidden rounded-xl border border-surface-border">
      <table className="w-full border-collapse text-left">
        {caption && (
          <caption className="border-b border-surface-border bg-surface-elevated px-4 py-3 text-sm font-semibold text-white">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-surface-border bg-surface-elevated">
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
              className="border-b border-surface-border last:border-b-0 even:bg-surface-elevated/50"
            >
              <td className="px-4 py-3 text-sm text-surface-muted">
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
