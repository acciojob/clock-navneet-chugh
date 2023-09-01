//your JS code here. If required.
  function updateClock() {
            const timerElement = document.getElementById("timer");
            const now = new Date();

            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            };

            const formattedDate = now.toLocaleDateString(undefined, options);
            timerElement.textContent = formattedDate;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Initial call to set the clock
        updateClock();