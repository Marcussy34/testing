import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

// Demo page showcasing shadcn/ui components
export default function ShadcnDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              shadcn/ui Demo
            </h1>
            <p className="text-muted-foreground text-lg">
              Your shadcn/ui components are working perfectly!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>
              Different button variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
            <CardDescription>
              Various badge styles for status indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Input Example */}
        <Card>
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
            <CardDescription>Styled input fields</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your email..." />
            <Input type="password" placeholder="Enter your password..." />
            <Input disabled placeholder="Disabled input..." />
          </CardContent>
        </Card>

        {/* Theme Toggle Info */}
        <Card>
          <CardHeader>
            <CardTitle>Theme Support</CardTitle>
            <CardDescription>
              Black and white theme with light/dark mode toggle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the theme toggle button in the top-right corner to switch
              between:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-background border rounded-full"></div>
                <span className="text-sm">
                  Light mode - Pure white background with black text
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-foreground rounded-full"></div>
                <span className="text-sm">
                  Dark mode - Pure black background with white text
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-muted border rounded-full"></div>
                <span className="text-sm">
                  System - Follows your device's theme preference
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
