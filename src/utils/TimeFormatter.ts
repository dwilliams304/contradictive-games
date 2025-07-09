// type TimeType = "Seconds" | "Minutes" | "MS" | "Hours" | "Days";

function FormatTime(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const secs = Math.floor(value % 60);

    const parts = [];

    if (hours > 0) {
        parts.push(hours.toString().padStart(2, '0'));
    }

    if (minutes > 0 || hours > 0) {
        parts.push(minutes.toString().padStart(2, '0'));
    }

    // Always show seconds (even if 0) when there are minutes/hours, or when it's the only component with milliseconds
    if (parts.length > 0 || secs > 0) {
        parts.push(secs.toString().padStart(2, '0'));
    }

    const result = parts.join(':');


    // Fallback for edge case where everything is 0
    return result || '0';
}

export { FormatTime }