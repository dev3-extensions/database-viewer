import { Plus, Search, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Tab, initTE } from 'tw-elements'

import table from '../table.json'

initTE({ Tab })

type Table = {
  name: string
  id: string
  type: string
  description: string
}

function App() {
  const [data, setData] = useState<Table[]>([])

  const parsedTableData = table.table.slice(1).map((row) => ({
    id: row[0],
    name: row[1],
    type: row[2],
    description: row[3],
  }))
  useEffect(() => {}, [])

  return (
    <>
      <div className="h-[400px] w-[600px] overflow-y-auto bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex gap-6">
            <p className="text-2xl font-bold">Database Viewer</p>
            <div className="bg-neutral-800 rounded-full py-1 px-4 flex gap-3">
              <button>
                <Plus strokeWidth={2} size={18} />
              </button>
              <button>
                <Search strokeWidth={2} size={16} />
              </button>
              <button>
                <Settings strokeWidth={2} size={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/12">
              <p className="bg-neutral-700 px-3 py-1 rounded text-center font-medium text-sm">
                IndexedDB
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="bg-neutral-700 px-3 py-1 rounded text-center font-medium text-sm">
                <p>Database (testing data here)</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-neutral-700 hover:bg-neutral-800 px-3 py-1 rounded"
                  onClick={() => {
                    setData(parsedTableData)
                  }}
                >
                  Read data
                </button>
                <button
                  className="bg-neutral-700 hover:bg-neutral-800 px-3 py-1 rounded"
                  onClick={() => {
                    setData([])
                  }}
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-col text-xs gap-4">
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
