'use client'
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Animation() {
  const { scrollY } = useScroll();
  const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);
  const yRight = useTransform(scrollY, [0, 500], ["35vh", "0vh"]);
  const xRight = useTransform(scrollY, [0, 500], ["35vw", "0vw"]);

  return (
    <div style={{ width: "100vw", height: "300vh" }}>
      <div
        style={{
          height: "110vh",
          display: "flex",
          position: "sticky",
          top: "0px",
        }}
      >
        {/* <motion.div className="child" style={{ height: "100%", width: "50vw" }}>
<img src="https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg" />
        </motion.div> */}
        <motion.div
          className="child"
          style={{
            height: "-100%",
            width: "-50vw",
            scale: scaleRight,
            y: yRight,
            x: xRight,
          }}
        >
    <img src="https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg" />
        </motion.div>
      </div>
    </div>
  );
}