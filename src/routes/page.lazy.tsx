import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/page')({
  component: Page,
})

function Page() {
  return <div className="p-2">Page1</div>
}
