"use client";

import localFont from "next/font/local";

const YekanBakhFaNumBold = localFont({
  src: "../public/YekanBakhFaNum-Bold.woff2",
});

const YekanBakhFaNumBoldRegular = localFont({
  src: "../public/YekanBakhFaNum-Regular.woff2",
});

function Font() {
  return (
    <style jsx global>
      {`
        :root {
          --font-YekanBakh-fa-num--bold: ${YekanBakhFaNumBold.style.fontFamily};
          --font-YekanBakh-fa-num--regular: ${YekanBakhFaNumBoldRegular.style
            .fontFamily};
        }
      `}
    </style>
  );
}

export default Font