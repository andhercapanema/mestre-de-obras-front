export function Initials({ name }: { name: string }) {
    function getFistLetters(name: string) {
        const nameArr = name.split(" ");

        return nameArr.length === 1
            ? nameArr[0][0]
            : nameArr[0][0] + nameArr[nameArr.length - 1][0];
    }

    return <>{getFistLetters(name)}</>;
}
