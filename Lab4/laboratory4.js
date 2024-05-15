function shufflePuzzle() {
    const puzzlePieces = document.querySelectorAll('.puzzle_piece');
    for (let i = 0; i < 100; i++) {
        const pieceIndex1 = Math.floor(Math.random() * 8);
        const pieceIndex2 = Math.floor(Math.random() * 8); 
        swapPieces(puzzlePieces[pieceIndex1], puzzlePieces[pieceIndex2]);
    }
}

// function to swap two puzzle pieces (their srcs)
function swapPieces(piece1, piece2) {
    const temp = piece1.querySelector('img').src;
    piece1.querySelector('img').src = piece2.querySelector('img').src;
    piece2.querySelector('img').src = temp;
}

// function to check if the puzzle is solved
function checkPuzzle() {
    const puzzlePieces = document.querySelectorAll('.puzzle_piece');
    let absolutePath = window.location.href;
    // remove last / and add assets/ to the path
    absolutePath = absolutePath.substring(0, absolutePath.lastIndexOf('/')) + '/assets/';
    console.log(absolutePath);

    for (let i = 0; i < puzzlePieces.length; i++) {
        console.log(puzzlePieces[i].querySelector('img').src);
        if (puzzlePieces[i].querySelector('img').src !== `${absolutePath}${i + 1}.jpg`) {
            return false;
        }
    }
    return true;
}


document.addEventListener("DOMContentLoaded", function() {
    shufflePuzzle();
    // add event listener to each puzzle piece
    document.querySelectorAll('.puzzle_piece').forEach(piece => {
        piece.addEventListener('click', () => {
            if (piece.classList.contains('selected')) {
                piece.classList.remove('selected');
                return;
            }
            const selectedPiece = document.querySelector('.selected');
            if (selectedPiece) {
                swapPieces(selectedPiece, piece);
                selectedPiece.classList.remove('selected');
                if (checkPuzzle()) {
                    alert('Well done!');
                }
            } 
            else 
            {
                piece.classList.add('selected');
            }
        });
    });  
});