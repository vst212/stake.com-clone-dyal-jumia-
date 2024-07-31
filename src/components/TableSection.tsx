import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import casinoBets from '../constants/casinoBet'
import clsx from 'clsx'
const TableSection = () => {
  return (
    <section className="w-full container">
      <Tabs defaultValue="casinoBet" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-2 max-w-[400px] h-18 rounded-full bg-grey-900">
          <TabsTrigger
            value="casinoBet"
            className="rounded-full text-white text-lg p-3 "
          >
            Casino Bets
          </TabsTrigger>
          <TabsTrigger
            value="sportBet"
            className="rounded-full text-white text-lg p-3 "
          >
            Sports Bets
          </TabsTrigger>
        </TabsList>
        <TabsContent value="casinoBet" className="mt-4">
          <Table className="w-full p-2 ">
            <TableHeader>
              <TableRow className="border-0 p-4">
                <TableHead className="table-head">Game</TableHead>
                <TableHead className="table-head">User</TableHead>
                <TableHead className="table-head">Time</TableHead>
                <TableHead className="table-head">BetAmount</TableHead>
                <TableHead className="table-head">Multiplier</TableHead>
                <TableHead className="text-right table-head">Payout</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {casinoBets.slice(0, 10).map((bet, i) => (
                <TableRow
                  key={i}
                  className={clsx('table-row', {
                    'bg-[#213743] shadow-md rounded-lg  ': i % 2 === 0,
                    'bg-[#1A2C38] ': i % 2 === 1,
                  })}
                >
                  <TableCell>{bet.game}</TableCell>
                  <TableCell className="text-grey-200">{bet.user}</TableCell>
                  <TableCell className="text-grey-200">{bet.time}</TableCell>
                  <TableCell className=" text-grey-200">
                    {bet.betAmount}
                  </TableCell>
                  <TableCell className=" text-grey-200">
                    {bet.multiplier}
                  </TableCell>
                  <TableCell className="text-right  text-grey-200">
                    {bet.payout}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="sportBet"></TabsContent>
      </Tabs>
    </section>
  )
}

export default TableSection
