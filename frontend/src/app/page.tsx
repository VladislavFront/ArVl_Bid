/* import { Logo } from "@/components/logo";

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">    
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Шаблон Next.js готов к работе
          </h1>
          <p className="text-lg text-muted-foreground">
            Воплотите идею в готовое веб-приложение!
          </p>
        </div>
      </main>

      <footer className="mb-4 flex items-center justify-center">
        <div className="flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-neutral-100">
          <Logo className="h-5 w-auto" />
        </div>
     </footer>
    </div>
  );
}
*/


"use client";

import React, { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function IndexPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Данные отправлены:", { title, price, description });
    alert(`Лот "${title}" успешно создан!`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Основной контент */}
      <main className="flex flex-1 items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Панель управления ArVi Bid</CardTitle>
            <CardDescription className="text-center">Заполните поля ниже, чтобы создать новый лот</CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {/* Поле: Название */}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Название лота</label>
                <Input 
                  type="text" 
                  placeholder="Введите название..." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Поле: Начальная ставка */}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Начальная цена (₽)</label>
                <Input 
                  type="number" 
                  placeholder="0.00" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              {/* Поле: Описание */}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Описание</label>
                <Textarea 
                  placeholder="Опишите ваш лот или добавьте детали..." 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full">
                Опубликовать лот
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>

      {/* Подвал сайта */}
      <footer className="mb-4 flex items-center justify-center">
        <div className="flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-neutral-100">
          <Logo className="h-5 w-auto" />
        </div>
      </footer>
    </div>
  );
}
