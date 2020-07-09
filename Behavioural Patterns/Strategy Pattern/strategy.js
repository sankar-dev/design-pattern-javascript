function SaveAsPng(){
    this.process = () => {
        // this function will save file as png
        console.log("Saving file as png")
    }
}

function SaveAsJpg(){
    this.process = () => {
        // this function will save file as jpg
        console.log("Saving file as jpg")
    }
}

function SaveStratergy(){
    this.saveType = "";
    this.setStratergy = ( saveType ) => {
        this.saveType = saveType;
    }

    this.save = () => {
        return this.saveType.process();
    }
}

const png = new SaveAsPng();
const jpg = new SaveAsJpg();

const saveFile = new SaveStratergy();

saveFile.setStratergy(png);
saveFile.save();

saveFile.setStratergy(jpg);
saveFile.save();