'use client'

import { Input } from "@/components/ui/input"

export function InputSearch() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Pesquisar..."
        className="md:w-[250px] lg:w-[400px]"
      />
    </div>
  )
}