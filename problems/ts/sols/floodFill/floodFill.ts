//DFS
const floodFill = (image: number[][], sr: number, sc: number, newColor: number): number[][] => {
    const oldColor = image[sr][sc];
    function DFS(row: number, col: number){
        if(image[row]?.[col] === oldColor){
            image[row][col] = newColor;
            DFS(row + 1, col);
            DFS(row - 1, col);
            DFS(row, col + 1);
            DFS(row, col - 1);
        };
    };
    if(oldColor !== newColor)
        DFS(sr, sc);
    return image;
};
