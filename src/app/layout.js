import "./globals.css";

export const metadata = {
  title: "Visionary Youth Labs Academy",
  description: "Visionary Youth Labs Academy is a complete practical and equiped computer  training center/lab in the Rohingya refugee camps where we provide hands on practical trainings and build young generations with digital tech skills to contribute in global landscape of the digital tech opportunities and beyond. VYLA is implemented by Visionary Youth Labs, a Web Development and Digital Marketing service provider based in Rohingya refugee camp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
