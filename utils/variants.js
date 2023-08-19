const easing = [0.6, -0.05, 0.01, 0.99];

export const container = {
    visible:{
        transition:{
            staggerChildren: 0.2,
            easing,
        },
    },
};

export const item = {
    hidden: {y: -20, opacity: 0},
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
        },
    },
};

export const scale = {
    hidden: {scale:0, opacity:0},
    visible:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.5,
        },
    },
};

export const xitem = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const yitem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const hover = {
    scale: 1.1,
    // border: "1px solid #650DB2",
    transition: { duration: 0.2, ease: "easeInOut" },
  };
  
  export const tap = {
    scale: 0.9,
    transition: { duration: 0.1, ease: "easeInOut" },
  };

  export const sidebar = {
    open: {
      clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
  
      transition: {
        staggerChildren: 0.2,
        easing,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
  
      transition: {
        staggerChildren: 0.1,
        easing,
      },
    },
  };

  export const itemVariants = {
    closed: {
      x: -32,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };