import {
  ArrowUp,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Amoukies Redouane Portfolio.
      </p>

      <div className="pt-8">
        <h4 className="font-medium mb-4"> Connect With Me</h4>
        <div className="flex space-x-4 justify-center">
          <a href="#" target="_blank">
            <Linkedin />
          </a>
          <a href="#" target="_blank">
            <Twitter />
          </a>
          <a href="#" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors mx-4"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
