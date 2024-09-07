document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    // Get the width and height of the viewport
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate the hue based on the X position (0 to 360 degrees)
    const hue = (clientX / width) * 360;

    // Calculate the saturation and lightness based on the Y position (0 to 100%)
    const saturation = 100;
    const lightness = (clientY / height) * 100;

    // Set the background color using HSL
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
});
document.addEventListener('DOMContentLoaded', () => {
    // Create the dot element
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    document.body.appendChild(dot);

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;

        // Get the width and height of the viewport
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Calculate the hue based on the X position (0 to 360 degrees)
        const hue = (clientX / width) * 360;

        // Calculate the lightness based on the Y position (0% to 100%)
        const lightness = (clientY / height) * 100;

        // Fix saturation at 100% to get the full color range
        const saturation = 100;

        // Set the background color using HSL
        const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        document.body.style.backgroundColor = bgColor;

        // Calculate the inverse color
        const inverseHue = (hue + 180) % 360;
        const inverseLightness = 100 - lightness;

        // Set the dot color to the inverse
        const dotColor = `hsl(${inverseHue}, ${saturation}%, ${inverseLightness}%)`;
        dot.style.backgroundColor = dotColor;

        // Update the dot's position
        dot.style.left = `${clientX}px`;
        dot.style.top = `${clientY}px`;
    });
});
