import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: App,
})

export function App() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
export default App