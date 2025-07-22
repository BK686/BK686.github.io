const images = [
                document.getElementById("bg1"),
                document.getElementById("bg2"),
                document.getElementById("bg3"),
                document.getElementById("bg4"),
                document.getElementById("bg5"),
                document.getElementById("bg6"),
                document.getElementById("bg7"),
                document.getElementById("bg8"),
                document.getElementById("bg9"),
                document.getElementById("bg10"),
            ];

            let current = 0;

            setInterval(() => {
                images[current].classList.remove("active");
                current = (current + 1) % images.length;
                images[current].classList.add("active");
            }, 5000); // Switch every 5 seconds