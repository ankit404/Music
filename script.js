function sequencer() {
    const kick = new Tone.Player('./sounds/kick-electro01.wav').toDestination();
    const snare = new Tone.Player('./sounds/snare-lofi02.wav').toDestination();
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.Transport.start();

    function repeat() {
        let step = index % 8;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step+1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step+1})`);
        if (kickInputs.checked) {
            kick.start();
        }
        if (snareInputs.checked) {
            snare.start();
        }
        index++;
    }

}

sequencer();