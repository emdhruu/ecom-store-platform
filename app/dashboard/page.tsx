import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, Users } from "lucide-react";
import React from "react";

export default function Dashboard() {
  const CardDetails = [
    {
      title: "Total Revenue",
      symbol: <DollarSign className="w-5 h-5 text-green-500" />,
      p1: "$1000.00",
      p2: "based on 100 Charges",
    },
    {
      title: "Total Sales",
      symbol: <ShoppingBag className="w-5 h-5 text-blue-500" />,
      p1: "+50",
      p2: "Total Sales on LegacyMart",
    },
    {
      title: "Total Products",
      symbol: <PartyPopper className="w-5 h-5 text-indigo-500" />,
      p1: "37",
      p2: "Total Products created",
    },
    {
      title: "Total Users",
      symbol: <Users className="w-5 h-5 text-yellow-500" />,
      p1: "100+",
      p2: "Total Users Signed",
    },
  ];
  return (
    <>
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {CardDetails.map((idx, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>{idx.title}</CardTitle>
              {idx.symbol}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{idx.p1}</p>
              <p className="text-xs text-muted-foreground">{idx.p2}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transcations</CardTitle>
            <CardDescription>
              Recent transcations from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Have a look on sales</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex">
                <AvatarFallback>DT</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Dhruti Thakkar</p>
                <p className="text-sm text-muted-foreground">
                  emdhruu@test.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
