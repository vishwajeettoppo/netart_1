import {
  LanguageRounded,
  CallRounded,
  FacebookRounded,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className=" bg-red-500 flex flex-col md:flex-row py-8 items-center gap-2 justify-evenly text-white">
      <div className=" flex items-center gap-4">
        <CallRounded />
        Toll free 1800 200 1234
      </div>
      <div className=" flex items-center gap-4">
        <FacebookRounded />
        www.facebook.com/cripumps
      </div>
      <div className=" flex items-center gap-4">
        <LanguageRounded />
        www.crigroups.com
      </div>
    </div>
  );
}

export default Footer;
