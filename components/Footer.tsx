"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Hemant Baviskar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
