"use client";

import { useState } from "react";
import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import {
  TableLookup,
  type TableLookupColumn,
} from "@/ascendra-ui/components/ui/table-lookup";

// ─── Port example data type ───────────────────────────────────────────────────

type Port = {
  code: string;
  name: string;
  country: string;
  type: "Sea" | "Air" | "Rail" | "Road";
  description: string;
};

const portColumns: TableLookupColumn<Port>[] = [
  { key: "code",        label: "Code",        width: 80,  searchable: true  },
  { key: "name",        label: "Port Name",   width: 160, searchable: true  },
  { key: "country",     label: "Country",     width: 120, searchable: true  },
  { key: "type",        label: "Type",        width: 80                     },
  { key: "description", label: "Description", width: 200                    },
];

const ALL_PORTS: Port[] = [
  { code: "SGSIN", name: "Port of Singapore",       country: "Singapore",     type: "Sea",  description: "Largest transshipment hub in Asia" },
  { code: "CNSHA", name: "Port of Shanghai",         country: "China",         type: "Sea",  description: "World's busiest container port" },
  { code: "NLRTM", name: "Port of Rotterdam",        country: "Netherlands",   type: "Sea",  description: "Largest port in Europe" },
  { code: "USLAX", name: "Port of Los Angeles",      country: "United States", type: "Sea",  description: "Busiest container port in the US" },
  { code: "AEDXB", name: "Port of Jebel Ali",        country: "UAE",           type: "Sea",  description: "Largest port in the Middle East" },
  { code: "DEHAM", name: "Port of Hamburg",          country: "Germany",       type: "Sea",  description: "Germany's largest seaport" },
  { code: "GBFXT", name: "Port of Felixstowe",       country: "United Kingdom",type: "Sea",  description: "UK's busiest container port" },
  { code: "JPYOK", name: "Port of Yokohama",         country: "Japan",         type: "Sea",  description: "Major gateway port in Japan" },
  { code: "KRPUS", name: "Port of Busan",            country: "South Korea",   type: "Sea",  description: "Fifth busiest container port globally" },
  { code: "BEANR", name: "Port of Antwerp",          country: "Belgium",       type: "Sea",  description: "Second busiest port in Europe" },
  { code: "USSEA", name: "Port of Seattle",          country: "United States", type: "Sea",  description: "Northwest US gateway port" },
  { code: "MYPKG", name: "Port Klang",               country: "Malaysia",      type: "Sea",  description: "Malaysia's principal port" },
  { code: "HKHKG", name: "Port of Hong Kong",        country: "Hong Kong",     type: "Sea",  description: "Major transshipment port in Asia" },
  { code: "INMAA", name: "Chennai Port",             country: "India",         type: "Sea",  description: "Major port on India's east coast" },
  { code: "ZAPTR", name: "Port Elizabeth",           country: "South Africa",  type: "Sea",  description: "Key container terminal in South Africa" },
  { code: "GBLON", name: "Heathrow Airport",         country: "United Kingdom",type: "Air",  description: "Busiest air cargo hub in the UK" },
  { code: "USJFK", name: "John F. Kennedy Airport",  country: "United States", type: "Air",  description: "Major international air cargo hub" },
  { code: "DEDUS", name: "Düsseldorf Airport",       country: "Germany",       type: "Air",  description: "Primary cargo airport for western Germany" },
  { code: "FRCLY", name: "Paris Charles de Gaulle",  country: "France",        type: "Air",  description: "France's largest air cargo gateway" },
  { code: "CNPEK", name: "Beijing Capital Airport",  country: "China",         type: "Air",  description: "Major hub for north China air cargo" },
  { code: "DEFRA", name: "Frankfurt Rail Hub",       country: "Germany",       type: "Rail", description: "Central European rail freight hub" },
  { code: "PLWAW", name: "Warsaw Rail Terminal",     country: "Poland",        type: "Rail", description: "Gateway for New Silk Road rail freight" },
  { code: "GBMAN", name: "Manchester Inland Port",   country: "United Kingdom",type: "Road", description: "Major inland distribution centre" },
  { code: "FRPAR", name: "Paris Rungis Hub",         country: "France",        type: "Road", description: "Europe's largest wholesale road hub" },
];

const mockOnSearch = async (query: string, field?: string): Promise<Port[]> => {
  await new Promise((r) => setTimeout(r, 300));
  if (!query.trim()) return ALL_PORTS;
  const q = query.toLowerCase();
  return ALL_PORTS.filter((p) => {
    const col = field as keyof Port | undefined;
    if (col && col in p) return String(p[col]).toLowerCase().includes(q);
    return (
      p.code.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q)
    );
  });
};

// ─── Previews ─────────────────────────────────────────────────────────────────

function SingleModePreview() {
  const [value, setValue] = useState<Port | null>(null);
  return (
    <div className="w-64">
      <TableLookup<Port>
        columns={portColumns}
        valueKey="code"
        labelKey="name"
        mode="single"
        placeholder="Select port…"
        value={value}
        onChange={(v) => setValue(v as Port | null)}
        onSearch={mockOnSearch}
      />
    </div>
  );
}

function MultiModePreview() {
  const [value, setValue] = useState<Port[] | null>(null);
  return (
    <div className="w-80">
      <TableLookup<Port>
        columns={portColumns}
        valueKey="code"
        labelKey="name"
        mode="multiple"
        placeholder="Select ports…"
        value={value}
        onChange={(v) => setValue(v as Port[] | null)}
        onSearch={mockOnSearch}
      />
    </div>
  );
}

function DisabledPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-56">
        <TableLookup<Port>
          columns={portColumns}
          valueKey="code"
          labelKey="name"
          mode="single"
          placeholder="Select port…"
          disabled
          onSearch={mockOnSearch}
        />
      </div>
      <div className="w-64">
        <TableLookup<Port>
          columns={portColumns}
          valueKey="code"
          labelKey="name"
          mode="multiple"
          placeholder="Select ports…"
          disabled
          onSearch={mockOnSearch}
        />
      </div>
    </div>
  );
}

// ─── Doc export ───────────────────────────────────────────────────────────────

export function TableLookupDocContent() {
  return (
    <div className="space-y-10">
      <SectionHeader>Single selection</SectionHeader>
      <ComponentPreview
        code={`<TableLookup<Port>
  columns={portColumns}
  valueKey="code"
  labelKey="name"
  mode="single"
  placeholder="Select port…"
  value={value}
  onChange={(v) => setValue(v as Port | null)}
  onSearch={onSearch}
/>`}
      >
        <SingleModePreview />
      </ComponentPreview>

      <SectionHeader>Multiple selection</SectionHeader>
      <ComponentPreview
        code={`<TableLookup<Port>
  columns={portColumns}
  valueKey="code"
  labelKey="name"
  mode="multiple"
  placeholder="Select ports…"
  value={value}
  onChange={(v) => setValue(v as Port[] | null)}
  onSearch={onSearch}
/>`}
      >
        <MultiModePreview />
      </ComponentPreview>

      <SectionHeader>Disabled</SectionHeader>
      <ComponentPreview
        code={`<TableLookup<Port>
  columns={portColumns}
  valueKey="code"
  labelKey="name"
  disabled
  onSearch={onSearch}
/>`}
      >
        <DisabledPreview />
      </ComponentPreview>
    </div>
  );
}
