"use client";

import { useEffect } from "react";

// Extend the Window interface to include our custom functions
declare global {
  interface Window {
    findEasterEgg?: () => string;
    hireUs?: () => string;
    help?: () => string;
    ourSkills?: () => string;
    resume?: () => string;
    joke?: () => string;
    matrix?: () => string;
    coffee?: () => string;
  }
}

export const ConsoleEasterEgg = () => {
  useEffect(() => {
    // ASCII Art
    const asciiArt = `
%c
████████╗██╗   ██╗██████╗ ███████╗
╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝
   ██║    ╚████╔╝ ██████╔╝█████╗  
   ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  
   ██║      ██║   ██║     ███████╗
   ╚═╝      ╚═╝   ╚═╝     ╚══════╝
██████╗ ██╗   ██╗██████╗ ██████╗ ██╗   ██╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
██████╔╝██║   ██║██║  ██║██║  ██║ ╚████╔╝ 
██╔══██╗██║   ██║██║  ██║██║  ██║  ╚██╔╝  
██████╔╝╚██████╔╝██████╔╝██████╔╝   ██║   
╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝    ╚═╝   
    `;

    // Display ASCII art
    console.log(asciiArt, "color: #0ea5e9; font-weight: bold;");

    // Welcome message with styling
    console.log(
      "%c🎉 Hey there, curious developer! 🎉",
      "font-size: 20px; font-weight: bold; color: #10b981; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);"
    );

    // Multiple styled messages
    console.log(
      "%c👀 We see you peeking under the hood!",
      "font-size: 14px; color: #8b5cf6; font-style: italic;"
    );

    console.log(
      "%c🔍 Looking for bugs? We already squashed them all! 🐛",
      "font-size: 14px; color: #f59e0b;"
    );

    // Warning style message (for fun)
    console.log(
      "%c⚠️ WARNING: ",
      "background: #ef4444; color: white; font-size: 14px; padding: 2px 6px; border-radius: 3px;",
      "This console may contain traces of awesome code and bad jokes."
    );

    // Team introduction - as students
    console.group(
      "%c👨‍🎓 Meet the Student Developers Behind TypeBuddy",
      "font-size: 16px; color: #06b6d4; font-weight: bold;"
    );
    console.log(
      "%c🚀 Skandhan",
      "color: #10b981; font-weight: bold;",
      "- Northeastern University | Actively seeking opportunities"
    );
    console.log(
      "%c🎨 Swathi",
      "color: #ec4899; font-weight: bold;",
      "- Software Engineer |  Actively seeking opportunities"
    );
    console.log(
      "%c⚡ Akash",
      "color: #f59e0b; font-weight: bold;",
      "- Northeastern University |  Actively seeking opportunities"
    );
    console.groupEnd();

    // Hiring message
    console.log(
      "%c💼 We're Looking for Opportunities!",
      "font-size: 16px; color: #a855f7; font-weight: bold; margin-top: 10px;"
    );
    console.log(
      "We're passionate student developers actively seeking full-time positions!"
    );
    console.log("Type: hireUs() to learn more about us!");

    // Add the easter egg function to window
    window.findEasterEgg = () => {
      console.clear();
      const messages = [
        "🥚 You found it! Here's the secret...",
        "🎓 We're three ambitious students who built TypeBuddy!",
        "💡 We love solving problems and building things that matter.",
        "🚀 Currently seeking full-time opportunities to make an impact!",
        "📧 Want to hire talented developers? Reach out: skandhanmnss208@gmail.com",
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          console.log(
            `%c${msg}`,
            `font-size: 14px; color: hsl(${
              index * 60
            }, 70%, 50%); font-weight: bold;`
          );
        }, index * 1000);
      });

      // Return something fun
      return "🎉 Achievement Unlocked: Found Future Employees!";
    };

    // Update hire function to hireUs
    window.hireUs = () => {
      console.log(
        "%c🎯 Why You Should Hire Us:",
        "font-size: 18px; color: #10b981; font-weight: bold;"
      );
      console.log(
        "\n%c✅ What We Bring:",
        "font-size: 14px; color: #06b6d4; font-weight: bold;"
      );
      console.log("• Fresh perspectives and endless enthusiasm");
      console.log("• Strong technical skills in modern web development");
      console.log("• Proven ability to ship products (TypeBuddy is live!)");
      console.log("• Team collaboration experience");
      console.log("• Eager to learn and grow with your company");

      console.log(
        "\n%c📚 Our Tech Stack:",
        "font-size: 14px; color: #8b5cf6; font-weight: bold;"
      );
      console.log("React, Next.js, TypeScript, Node.js, and more!");

      console.log(
        "\n%c🔗 Connect With Us:",
        "font-size: 14px; color: #ec4899; font-weight: bold;"
      );
      console.log("📧 Skandhan: skandhanmnss208@gmail.com");
      console.log(
        "   LinkedIn: https://www.linkedin.com/in/skandhan-madhusudhana/"
      );
      console.log("📧 Swathi: swathiw@gmail.com");
      console.log("   LinkedIn: https://www.linkedin.com/in/swathi-meghana/");
      console.log("📧 Akash: shridharshetty.a@northeastern.edu");
      console.log("   LinkedIn: https://www.linkedin.com/in/akashshetty1997/");

      return "🚀 We're ready to contribute to your team's success!";
    };

    window.help = () => {
      console.log(
        "%c📚 Secret Console Commands:",
        "font-size: 16px; color: #06b6d4; font-weight: bold;"
      );
      console.table({
        "findEasterEgg()": "Discover a hidden surprise",
        "hireUs()": "Learn why we'd be great for your team",
        "ourSkills()": "See our technical skills",
        "joke()": "Get a developer joke",
        "matrix()": "Enter the Matrix",
        "coffee()": "Developer fuel status",
        "resume()": "Quick overview of our qualifications",
      });
      return "Type any command to try it out!";
    };

    window.ourSkills = () => {
      console.group(
        "%c💻 Our Technical Skills",
        "font-size: 18px; color: #10b981; font-weight: bold;"
      );

      console.log("\n%c🎯 Languages:", "font-weight: bold; color: #06b6d4;");
      console.log("JavaScript, TypeScript, Python, Java, HTML/CSS");

      console.log("\n%c⚛️ Frontend:", "font-weight: bold; color: #8b5cf6;");
      console.log("React, Next.js, Vue.js, Tailwind CSS, Framer Motion");

      console.log("\n%c🔧 Backend:", "font-weight: bold; color: #10b981;");
      console.log("Node.js, Express, REST APIs, GraphQL");

      console.log("\n%c🗄️ Databases:", "font-weight: bold; color: #f59e0b;");
      console.log("MongoDB, PostgreSQL, MySQL, Redis");

      console.log(
        "\n%c☁️ Tools & Others:",
        "font-weight: bold; color: #ec4899;"
      );
      console.log("Git, Docker, AWS, CI/CD, Agile/Scrum");

      console.groupEnd();
      return "💪 Ready to put these skills to work for your company!";
    };

    window.resume = () => {
      console.log(
        "%c📄 Quick Resume Overview",
        "font-size: 18px; color: #06b6d4; font-weight: bold;"
      );
      console.log(
        "\n%c👥 Who We Are:",
        "font-size: 14px; font-weight: bold; color: #10b981;"
      );
      console.log("Three passionate computer science students graduating soon");
      console.log("Built TypeBuddy - a production-ready Chrome extension");
      console.log(
        "\n%c🎯 What We Want:",
        "font-size: 14px; font-weight: bold; color: #f59e0b;"
      );
      console.log("• Full-time Software Engineering positions");
      console.log("• Opportunities to work on impactful projects");
      console.log("• A place to grow and learn from experienced developers");
      console.log(
        "\n%c💡 Why Hire Us:",
        "font-size: 14px; font-weight: bold; color: #8b5cf6;"
      );
      console.log("• We ship real products (TypeBuddy is proof!)");
      console.log("• Strong problem-solving skills");
      console.log("• Great team players (we built this together!)");
      console.log("• Hungry to learn and make an impact");

      console.log(
        "\n%c📬 Get In Touch:",
        "font-size: 14px; font-weight: bold; color: #ec4899;"
      );
      console.log("We'd love to chat about opportunities at your company!");
      console.log("Email any of us - we promise to respond quickly! 😊");

      return "🚀 Let's build something amazing together!";
    };

    window.joke = () => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why do Java developers wear glasses? Because they don't C#! 👓",
        "What's a programmer's favorite place to hang out? The Foo Bar! 🍺",
        "Why did the developer go broke? Because he used up all his cache! 💸",
        "// TODO: Get hired at an awesome company ✅",
        "There are only 10 types of people: those who understand binary and those who want to hire us! 🔢",
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      console.log(
        `%c${randomJoke}`,
        "font-size: 14px; color: #f59e0b; font-style: italic;"
      );
      return "😄 Hope that brightened your day!";
    };

    window.matrix = () => {
      console.clear();
      const matrixRain = setInterval(() => {
        const chars = "01HIREUS";
        const randomChar = () =>
          chars[Math.floor(Math.random() * chars.length)];
        const line = Array(50)
          .fill(null)
          .map(() => randomChar())
          .join("");
        console.log(`%c${line}`, "color: #00ff00; font-family: monospace;");
      }, 100);

      setTimeout(() => {
        clearInterval(matrixRain);
        console.clear();
        console.log(
          "%c🕶️ The Matrix has you... and it says 'HIRE THESE STUDENTS!'",
          "font-size: 16px; color: #10b981;"
        );
      }, 5000);

      return "Entering the Matrix... (stops in 5 seconds)";
    };

    window.coffee = () => {
      const coffeeLevel = Math.floor(Math.random() * 100);
      const status =
        coffeeLevel > 70
          ? "Fully Caffeinated ☕☕☕"
          : coffeeLevel > 40
          ? "Running on fumes ☕☕"
          : "CRITICAL: Coffee needed immediately! ☕";

      console.log(
        `%c☕ Student Coffee Level: ${coffeeLevel}%`,
        `font-size: 16px; color: ${
          coffeeLevel > 70
            ? "#10b981"
            : coffeeLevel > 40
            ? "#f59e0b"
            : "#ef4444"
        }; font-weight: bold;`
      );
      console.log(`Status: ${status}`);
      console.log("(Sustained by ramen and determination 🍜)");

      // ASCII coffee cup
      console.log(`
        ( (
         ) )
      ........
      |      |]
      \\      /
       \`----'
      `);

      return coffeeLevel > 70
        ? "Ready to code all night! 🚀"
        : "Time for a coffee run! ☕";
    };

    // Detect if DevTools is open
    const devtools = { open: false, orientation: null as string | null };
    const threshold = 160;
    const emitEvent = (state: boolean) => {
      if (state) {
        console.log(
          "%c🔓 DevTools detected! Type help() to see available commands. PS: We're looking for jobs! 😊",
          "font-size: 12px; color: #8b5cf6; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;"
        );
      }
    };

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          emitEvent(true);
          devtools.open = true;
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Clean up functions when component unmounts
    return () => {
      delete window.findEasterEgg;
      delete window.hireUs;
      delete window.ourSkills;
      delete window.resume;
      delete window.help;
      delete window.joke;
      delete window.matrix;
      delete window.coffee;
    };
  }, []);

  return null;
};
