import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BarChart, Users, Truck, FileText, FolderOpen, Settings, Send } from "lucide-react"
import { LineChart, Line, BarChart as BarChartComp, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function App() {
  const data = [
    { mese: "Gen", contratti: 10, valore: 15000 },
    { mese: "Feb", contratti: 12, valore: 18000 },
    { mese: "Mar", contratti: 8, valore: 12000 },
    { mese: "Apr", contratti: 15, valore: 20000 },
    { mese: "Mag", contratti: 14, valore: 21000 },
    { mese: "Giu", contratti: 9, valore: 14000 },
    { mese: "Lug", contratti: 17, valore: 25000 },
    { mese: "Ago", contratti: 11, valore: 16000 },
    { mese: "Set", contratti: 13, valore: 19500 },
    { mese: "Ott", contratti: 16, valore: 24000 },
    { mese: "Nov", contratti: 14, valore: 22500 },
    { mese: "Dic", contratti: 18, valore: 27000 }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Intestazione */}
      <header className="bg-blue-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Dashboard Noleggio – Gruppo Barone Srl</h1>
        <div className="text-sm">Amministratore: <span className="font-semibold">admin</span></div>
      </header>

      <div className="flex flex-1">
        {/* Menu laterale */}
        <aside className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
          <nav className="space-y-2">
            <div className="text-lg font-bold text-center border-b border-blue-600 pb-2 mb-4">
              Gestione Noleggio
            </div>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><BarChart className="mr-2" size={18}/>Dashboard</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><Users className="mr-2" size={18}/>Clienti</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><Truck className="mr-2" size={18}/>Mezzi e Attrezzature</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><FileText className="mr-2" size={18}/>Contratti</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><FolderOpen className="mr-2" size={18}/>Archivio Dropbox</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><Send className="mr-2" size={18}/>Invia a Fatturazione Aruba</Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700"><Settings className="mr-2" size={18}/>Impostazioni</Button>
          </nav>
          <footer className="text-center text-xs text-gray-200 border-t border-blue-700 pt-3">
            © 2025 Gruppo Barone Srl – Tutti i diritti riservati<br/>
            Viale dei Giudici Falcone Borsellino snc, 70024 Gravina in Puglia (BA)<br/>
            <a href="http://www.gruppobarone.it" className="underline text-yellow-400">www.gruppobarone.it</a>
          </footer>
        </aside>

        {/* Contenuto principale */}
        <main className="flex-1 p-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-blue-100">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Mezzi Disponibili</p>
                <h3 className="text-3xl font-bold text-blue-900">12</h3>
              </CardContent>
            </Card>
            <Card className="bg-yellow-100">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Contratti Aperti</p>
                <h3 className="text-3xl font-bold text-yellow-900">5</h3>
              </CardContent>
            </Card>
            <Card className="bg-green-100">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Da Fatturare</p>
                <h3 className="text-3xl font-bold text-green-900">3</h3>
              </CardContent>
            </Card>
            <Card className="bg-orange-100">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Ordini in Arrivo</p>
                <h3 className="text-3xl font-bold text-orange-900">2</h3>
              </CardContent>
            </Card>
          </div>

          {/* Promemoria scadenze */}
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Promemoria Scadenze Contratti</h2>
          <Table className="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead>Contratto</TableH
