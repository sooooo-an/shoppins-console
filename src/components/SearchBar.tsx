"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type SearchFilter = "productName" | "productCode"

export interface SearchBarProps {
  onSearch?: (query: string, filter: SearchFilter) => void
  placeholder?: string
  className?: string
  defaultFilter?: SearchFilter
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ onSearch, placeholder = "상품명으로 검색..", className, defaultFilter = "productName" }, ref) => {
    const [filter, setFilter] = React.useState<SearchFilter>(defaultFilter)
    const [query, setQuery] = React.useState("")

    const handleSearch = () => {
      onSearch?.(query, filter)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    }

    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)}>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value as SearchFilter)}
          className="w-[120px]"
        >
          <option value="productName">상품명</option>
          <option value="productCode">상품코드</option>
        </Select>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch}>검색</Button>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }

