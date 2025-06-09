# shadcn/ui Setup Guide

## ✅ Installation Complete!

Your Next.js project now has **shadcn/ui** fully configured and ready to use!

## 🎯 What's Installed

### Core Dependencies

- `class-variance-authority` - For component variant styling
- `clsx` & `tailwind-merge` - For conditional CSS classes
- `lucide-react` - Icon library
- `@radix-ui/*` packages - Accessible component primitives

### Available Components

- ✅ **Button** - Multiple variants (default, secondary, outline, destructive, ghost, link)
- ✅ **Card** - Container with header, content, and footer sections
- ✅ **Badge** - Status indicators and labels
- ✅ **Input** - Styled form inputs
- ✅ **Dialog** - Modal dialogs and overlays
- ✅ **Tooltip** - Hover tooltips
- ✅ **Accordion** - Collapsible content sections
- ✅ **Separator** - Visual dividers

## 🚀 Quick Start

### 1. View the Demo

Visit `/demo` to see all components in action:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/demo`

### 2. Import and Use Components

```jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me!</Button>
      </CardContent>
    </Card>
  );
}
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── badge.jsx
│       └── ...
├── lib/
│   └── utils.js           # cn() utility function
└── styles/
    └── globals.css        # CSS variables and base styles
```

## 🎨 Theming

### CSS Variables

All components use CSS custom properties defined in `src/styles/globals.css`:

- `--background`, `--foreground` - Main colors
- `--primary`, `--secondary` - Action colors
- `--muted`, `--accent` - Secondary colors
- `--border`, `--ring` - Interactive states
- `--destructive` - Error states

### Dark Mode

Dark mode is automatically supported! Components will switch themes based on:

- System preference (`prefers-color-scheme: dark`)
- Or add `class="dark"` to any parent element

## 🛠️ Adding More Components

Use the shadcn CLI to add any component from the library:

```bash
# Popular components
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add dropdown-menu
npx shadcn@latest add calendar
npx shadcn@latest add sheet
npx shadcn@latest add popover
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add textarea
npx shadcn@latest add label

# Navigation components
npx shadcn@latest add navigation-menu
npx shadcn@latest add breadcrumb
npx shadcn@latest add sidebar

# Feedback components
npx shadcn@latest add alert
npx shadcn@latest add toast
npx shadcn@latest add sonner
npx shadcn@latest add progress

# Data display
npx shadcn@latest add avatar
npx shadcn@latest add skeleton
npx shadcn@latest add aspect-ratio
```

## 🔧 Configuration

Your `components.json` config:

- **Style**: New York (modern, clean design)
- **TypeScript**: Disabled (using .jsx files)
- **CSS Variables**: Enabled
- **Base Color**: Neutral
- **Icon Library**: Lucide React

## 📖 Component Examples

### Button Variants

```jsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outlined Button</Button>
<Button variant="destructive">Delete Item</Button>
<Button variant="ghost">Subtle Action</Button>
<Button variant="link">Link Style</Button>
```

### Card Layout

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Dialog Example

```jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
    </DialogHeader>
    <p>This action cannot be undone.</p>
  </DialogContent>
</Dialog>;
```

## 🎯 Best Practices

1. **Use the `cn()` utility** for conditional classes:

   ```jsx
   import { cn } from "@/lib/utils";

   <Button className={cn("w-full", isLoading && "opacity-50")}>Submit</Button>;
   ```

2. **Customize components** by extending them:

   ```jsx
   const CustomButton = ({ className, ...props }) => (
     <Button className={cn("my-custom-styles", className)} {...props} />
   );
   ```

3. **Use proper semantic HTML** - shadcn/ui components are built on accessible foundations

## 🌐 Useful Links

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 🐛 Troubleshooting

### React 19 Peer Dependency Warnings

If you see warnings about React 19, we're already using `--legacy-peer-deps` flag which resolves compatibility issues.

### Import Errors

Make sure your `jsconfig.json` has the path alias configured:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Styling Issues

- Ensure `globals.css` is imported in your app
- Check that Tailwind is properly configured
- Verify CSS variables are defined

---

**🎉 You're all set!** Start building beautiful UIs with shadcn/ui components.
