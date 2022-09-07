import React from "react";
import AnimationTwo from "./AnimationTwo";
import classes from "./DetailedAnimation.module.css";

const DetailedAnimation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        In-house technologies used to improve the functionality of nutrients in
        your food, beverage and supplement products. Our functionally optimized
        nutrient portfolio covers a wide variety of categories including
        vitamins, minerals, botanicals, amino acids, sweeteners, carbohydrates,
        fats (oils), fibers, and acids. NutraShield microencapsulated nutrients
        have a protective coating called a matrix applied around the nutrients
        core. The matrix keeps the active ingredient locked in and stabilized.
      </div>
      <div className="animation">
        <AnimationTwo />
      </div>
      <div className={classes.content}>
        Scientists and nutritionists widely understand that a healthy diet and
        healthy lifestyle contribute to a stronger immune system. We’re here to
        educate you on the research for why leeks and other fruits and
        vegetables should be a worthy addition to your diet. “Let food be thy
        medicine, and let medicine be thy food.” A healthy diet typically
        includes nutrient-dense foods from all of the major food groups,
        including lean proteins, whole grains, healthy fats, and fruits and
        vegetables of many colors.
      </div>
    </div>
  );
};

export default DetailedAnimation;
