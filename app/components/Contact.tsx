"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<div
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex  gap-5">
						<span className="text-white font-medium mb-4"> Name:</span>
						<span className="text-white font-medium mb-4"> Sahib Hayat</span>
					</label>
					<label className="flex  gap-5">
						<span className="text-white font-medium mb-4"> Email:</span>
						<span className="text-white font-medium mb-4"> sahibhayatsbht44@gmail.com</span>
					</label>
					<label className="flex  gap-5">
						<span className="text-white font-medium mb-4"> Phone:</span>
						<span className="text-white font-medium mb-4"> 0345-8544944</span>
					</label>
				</div>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				{/* <EarthCanvas /> */}
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
