document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM has loaded");

    const newMediaForm = document.querySelector('#new-media-form');
    const musicCollectionTable = document.querySelector('#music-collection-table');
    createSeeds(musicCollectionTable);

    newMediaForm.addEventListener('submit', handleFormSubmit);

    const radioFilter = document.querySelector('#filter-by-format');
    
    radioFilter.addEventListener('click', handleRadioFilter);
})

const handleFormSubmit = function(event){
    event.preventDefault();

    const newMediaRow = createMediaRow(this.select_format.value, this.select_category.value, this.input_artist.value, this.input_title.value);
    
    const musicCollectionTable = document.querySelector('#music-collection-table');
    musicCollectionTable.appendChild(newMediaRow);
    event.target.reset();
}

const handleRadioFilter = function(event){
    const filterOption = event.target.value; 

        const vinyl12InchList = document.getElementsByClassName("Vinyl-12-inch");
        const vinyl7InchList = document.getElementsByClassName("Vinyl-7-inch");
        const cdList = document.getElementsByClassName("CD");
        const vinyl12Inch = [...vinyl12InchList];
        const vinyl7Inch = [...vinyl7InchList];
        const cd = [...cdList];
        // debugger;
        vinyl12Inch.forEach( element => {element.style.display = "none";});
        vinyl7Inch.forEach( element => {element.style.display = "none";});
        cd.forEach( element => {element.style.display = "none";});

    switch (filterOption){
        case "filter-all":
            vinyl12Inch.forEach( element => {element.style.display = "table-row";});
            vinyl7Inch.forEach( element => {element.style.display = "table-row";});
            cd.forEach( element => {element.style.display = "table-row";});
            break;
        case "filter-vinyl7":
            vinyl7Inch.forEach( element => {element.style.display = "table-row";});
            break;   
        case "filter-vinyl12":
            vinyl12Inch.forEach( element => {element.style.display = "table-row";});
            break;
        case "filter-CD":
            cd.forEach( element => {element.style.display = "table-row";});
            break;

    }
}

function createSeeds(musicTable){

    const seedData = [
        {format: "Vinyl-12-inch", category: "Album", artist: "Nirvana", title: "Nevermind"},
        {format: "Vinyl-12-inch", category: "Single", artist: "Nirvana", title: "Lithium"},
        {format: "Vinyl-12-inch", category: "EP", artist: "Nine Inch Nails", title: "Broken"},
        {format: "Vinyl-7-inch", category: "Single", artist: "Sonic Youth", title: "Goo"},
        {format: "Vinyl-7-inch", category: "Single", artist: "The Cult", title: "She Sells Sanctuary"},
        {format: "CD", category: "Album", artist: "The Cure", title: "Disintegration"},
        {format: "CD", category: "Album", artist: "Goldfrapp", title: "Felt Mountain"}
      ];

      seedData.forEach( (item) => {
          musicTable.appendChild(createMediaRow(item.format, item.category, item.artist, item.title));
      })
}

function createMediaRow(format, category, artist, title){
    // debugger;
    const newMediaRow = document.createElement('tr');
    newMediaRow.classList.add('media-table-row');
    newMediaRow.classList.add(`${format}`);

    const mediaCellFormat = createMediaCell(format);
    newMediaRow.appendChild(mediaCellFormat);

    const mediaCellCategory = createMediaCell(category);
    newMediaRow.appendChild(mediaCellCategory);

    const mediaCellArtist = createMediaCell(artist);
    newMediaRow.appendChild(mediaCellArtist);

    const mediaCellTitle = createMediaCell(title);
    newMediaRow.appendChild(mediaCellTitle);

    return newMediaRow;

}

function createMediaCell(value){
    const newMediaCell = document.createElement('td');
    newMediaCell.textContent = value;
    return newMediaCell;
}
