import { SiGithub, SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between ">
        <div className="flex w-screen min-h-12 bg-[#242528] rounded-t-md justify-center">
          <div className="flex flex-col py-3 items-center gap-2">
            <h1 className="text-4xl font-medium">UKL Cloud Computing 2024</h1>
            <h2>Website by Teguh Bayu Pratama</h2>
            <div className="flex flex-column gap-2">
              <Link href="https://www.instagram.com/soyuz_slav/" target="_blank">
                <SiInstagram color="#E4405F" />
              </Link>
              <Link href="https://www.linkedin.com/in/teguhbayupratama/" target="_blank">
                <SiLinkedin color="#0A66C2"/>
              </Link>
              <Link href="https://github.com/teguhbayu" target="_blank">
                <SiGithub color="#FFF"/>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
