type GradientElementOptions = {
  color?: string;
  blending?: string;
  circleSize?: string;
  height?: string;
  top?: string;
  left?: string;
  transformOrigin?: string;
  animation?: string;
  opacity?: number;
}



// Utility function to generate CSS keyframes as a string
// (Note: This needs to be inserted into the document once via a style tag)
function generateKeyframes() {
  return `
    @keyframes moveInCircle {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(180deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes moveVertical {
      0% { transform: translateY(-50%); }
      50% { transform: translateY(50%); }
      100% { transform: translateY(-50%); }
    }
    
    @keyframes moveHorizontal {
      0% { transform: translateX(-50%) translateY(-10%); }
      50% { transform: translateX(50%) translateY(10%); }
      100% { transform: translateX(-50%) translateY(-10%); }
    }
  `;
}

// Text container function
function textContainerStyle(height = '200vh') {
  return {
    zIndex: 99,
    width: '100vw',
    height: height,
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  };
}

// Gradient background container
function gradientBgStyle(height = '200vh') {
  return {
    width: '100vw',
    height: height,
    minHeight: '100vh',
    position: 'relative' as const, // Use 'as const' to specify the exact value
    overflow: 'hidden' as const,
    background: 'linear-gradient(40deg, var(--color-bg2))',
    top: 0,
    left: 0,
    paddingX: "5vw",
    paddingY: "5vh",
    zIndex: "-999"
  };
}

// Gradients container style
function gradientsContainerStyle(height = '200vh') {
  return {
    filter: 'url(#goo) blur(40px)',
    width: '100vw',
    height: height,
    minHeight: '100vh',
    maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
    zIndex: "-999"
  };
}

// Gradient element styles
function gradientElementStyle(options?: GradientElementOptions) {
  const defaults = {
    color: 'var(--color1)',
    blending: 'var(--blending)',
    circleSize: 'var(--circle-size)',
    height: 'var(--circle-size)',
    top: 'calc(50% - var(--circle-size) / 2)',
    left: 'calc(50% - var(--circle-size) / 2)',
    transformOrigin: 'center center',
    animation: 'moveVertical 30s ease infinite',
    opacity: 1
  };

  const settings = { ...defaults, ...options };

  return {
    position: 'absolute',
    background: `radial-gradient(circle at center, rgba(${settings.color}, 0.8) 0, rgba(${settings.color}, 0) 50%) no-repeat`,
    mixBlendMode: settings.blending,
    width: settings.circleSize,
    height: settings.height,
    top: settings.top,
    left: settings.left,
    transformOrigin: settings.transformOrigin,
    animation: settings.animation,
    opacity: settings.opacity,
    zIndex: "-1"
  };
}

// Specific gradient elements
function g1Style(height = 'var(--circle-size)') {
  return gradientElementStyle({
    color: 'var(--color1)',
    height: height,
    animation: 'moveVertical 30s ease infinite' as const
  });
}

function g2Style(height = 'var(--circle-size)') {
  return gradientElementStyle({
    color: 'var(--color2)',
    height: height,
    transformOrigin: 'calc(50% - 400px)',
    animation: 'moveInCircle 20s reverse infinite'
  });
}

function g3Style(height = 'var(--circle-size)') {
  return gradientElementStyle({
    color: 'var(--color3)',
    height: height,
    top: 'calc(50% - var(--circle-size) / 2 + 200px)',
    left: 'calc(50% - var(--circle-size) / 2 - 500px)',
    transformOrigin: 'calc(50% + 400px)',
    animation: 'moveInCircle 40s linear infinite'
  });
}

function g4Style(height = 'var(--circle-size)') {
  return gradientElementStyle({
    color: 'var(--color4)',
    height: height,
    transformOrigin: 'calc(50% - 200px)',
    animation: 'moveHorizontal 40s ease infinite',
    opacity: 0.7
  });
}

function g5Style(height = 'calc(var(--circle-size) * 2)') {
  return gradientElementStyle({
    color: 'var(--color5)',
    circleSize: 'calc(var(--circle-size) * 2)',
    height: height,
    top: 'calc(50% - var(--circle-size))',
    left: 'calc(50% - var(--circle-size))',
    transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
    animation: 'moveInCircle 20s ease infinite'
  });
}

function interactiveStyle(height = '100%') {
  return gradientElementStyle({
    color: 'var(--color-interactive)',
    circleSize: '100%',
    height: height,
    top: '-50%',
    left: '-50%',
    opacity: 0.7
  });
}

export {
  generateKeyframes,
  gradientBgStyle,
  gradientsContainerStyle,
  g1Style,
  g2Style,
  g3Style,
  g4Style,
  g5Style,
  interactiveStyle,
  textContainerStyle
}