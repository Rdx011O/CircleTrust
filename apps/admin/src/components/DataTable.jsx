// DataTable — generic API-ready sortable table with skeleton and empty states
import { useState } from 'react'
import { ChevronsUpDown, ChevronUp, ChevronDown } from 'lucide-react'
import { SkeletonTableRows } from './SkeletonLoader'
import EmptyState from './EmptyState'

export default function DataTable({
    columns = [],
    data = [],
    loading = true,
    emptyTitle = 'No records found',
    emptyDesc = 'Table is awaiting a live data connection.',
    onRowClick
}) {
    const [sortCol, setSortCol] = useState(null)
    const [sortDir, setSortDir] = useState('asc')

    const handleSort = (col) => {
        if (col.sortable === false) return
        if (sortCol === col.key) {
            setSortDir(d => d === 'asc' ? 'desc' : 'asc')
        } else {
            setSortCol(col.key)
            setSortDir('asc')
        }
    }

    const sorted = sortCol
        ? [...data].sort((a, b) => {
            const va = a[sortCol], vb = b[sortCol]
            if (va < vb) return sortDir === 'asc' ? -1 : 1
            if (va > vb) return sortDir === 'asc' ? 1 : -1
            return 0
        })
        : data

    return (
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col.key} onClick={() => handleSort(col)} style={{ width: col.width }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    {col.label}
                                    {col.sortable !== false && (
                                        sortCol === col.key
                                            ? sortDir === 'asc'
                                                ? <ChevronUp size={12} />
                                                : <ChevronDown size={12} />
                                            : <ChevronsUpDown size={12} style={{ opacity: 0.4 }} />
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <SkeletonTableRows rows={6} cols={columns.length} />
                    ) : sorted.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length}>
                                <EmptyState title={emptyTitle} description={emptyDesc} />
                            </td>
                        </tr>
                    ) : (
                        sorted.map((row, ri) => (
                            <tr
                                key={ri}
                                onClick={() => onRowClick && onRowClick(row)}
                                style={onRowClick ? { cursor: 'pointer' } : {}}
                            >
                                {columns.map(col => (
                                    <td key={col.key}>
                                        {col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—')}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}
