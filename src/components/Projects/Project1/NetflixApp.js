import React from 'react'

export function NetflixApp() {
    return <>
    <h1>Netflix App</h1>
    <div className='rows'>
        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src="data:image/jpeg;base64,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 " />
                        <span class="card-title">Dark</span>
                    </div>
                    <div class="card-content">
                        <h4>A Netflix  Series</h4>
                    </div>
                    <div class="card-action">
                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F45%2FDark_xlg.jpg%2F220px-Dark_xlg.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Dark_(2018_film)&tbnid=NWuRY_a4WJQLJM&vet=12ahUKEwig5qv2h5T5AhVFZvEDHUtuBqcQMygJegUIARDyAQ..i&docid=C6_fnY3KngDG-M&w=220&h=312&q=dark%20image%20movie&ved=2ahUKEwig5qv2h5T5AhVFZvEDHUtuBqcQMygJegUIARDyAQ">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src="data:image/jpeg;base64,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" />
                        <span class="card-title">Devil in the Dark (2017)</span>
                    </div>
                    <div class="card-content">
                        <h4>Devil in the Dark</h4>
                    </div>
                    <div class="card-action">
                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMmM0YzlhMTUtYTAwNy00M2Y1LThmZjMtMTBiN2VkYmQ5N2QwL2ltYWdlXkEyXkFqcGdeQXVyMTM4NTIzMTM%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt5834800%2F&tbnid=NjFzIuWG5plHDM&vet=12ahUKEwig5qv2h5T5AhVFZvEDHUtuBqcQMygOegUIARD9AQ..i&docid=Vf3Vkga_kikV-M&w=1000&h=1464&q=dark%20image%20movie&ved=2ahUKEwig5qv2h5T5AhVFZvEDHUtuBqcQMygOegUIARD9AQ">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src='data:image/jpeg;base64,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'/>
                        <span class="card-title">Money Heist</span>
                    </div>
                    <div class="card-content">
                        <h4>Money Heist</h4>
                    </div>
                    <div class="card-action">
                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt6468322%2F&tbnid=6u9EAPHeLHhySM&vet=12ahUKEwiY1ZvDkJT5AhUSohoKHTf-AiMQMygAegUIARDDAQ..i&docid=aNoNhHUWUPZBvM&w=824&h=1241&q=money%20heistimage%20movie&ved=2ahUKEwiY1ZvDkJT5AhUSohoKHTf-AiMQMygAegUIARDDAQ">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdkadn1atH9lceiTBJrUFIwXylOamRmAhfQ&usqp=CAU" />
                        <span class="card-title">Dark</span>
                    </div>
                    <div class="card-content">
                        <h4>A  Morbius Movie </h4>
                    </div>
                    <div class="card-action">
                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fqqcdnpictest.mxplay.com%2Fpic%2F484f535d77542bca63e21efb896f4cd6%2Fen%2F2x3%2F320x480%2Ftest_pic1638541013780.webp&imgrefurl=https%3A%2F%2Fwww.mxplayer.in%2Fmovie-videos%2Fenglish-movies&tbnid=LBMMkZTwSWH8EM&vet=12ahUKEwjVuMK2kpT5AhVCZ_EDHUtWAo8QMygaegUIARCQAg..i&docid=FexwAnVBBc4UYM&w=320&h=480&q=movies&ved=2ahUKEwjVuMK2kpT5AhVCZ_EDHUtWAo8QMygaegUIARCQAg">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutGE24pSnnLlYc88jKwaF3TC8OCSBK_yF6g&usqp=CAU" />
                        <span class="card-title">Dark</span>
                    </div>
                    <div class="card-content">
                        <h4>A Netflix Series</h4>
                    </div>
                    <div class="card-action">
                        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dccomics.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcomics320x485%2Fpublic%2Fmovie-covers%2F2022%2F05%2FMovies-Thumb_SuperPets_628d5928a468f5.94400582.jpg%3Fitok%3DAYM_195h&imgrefurl=https%3A%2F%2Fwww.dccomics.com%2Fmovies&tbnid=_fDVsn5R4AC3EM&vet=12ahUKEwjVuMK2kpT5AhVCZ_EDHUtWAo8QMyhEegUIARCEAQ..i&docid=0RAe97kvzU26hM&w=320&h=485&q=movies&ved=2ahUKEwjVuMK2kpT5AhVCZ_EDHUtWAo8QMyhEegUIARCEAQ">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

</div>
<br/>
<br/>

<h1>I tried to create React WebPage</h1>
<div className='card_rows'>
<div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src=" https://picsum.photos/200/300 "/>
          <span className="card-title">Random Image </span>
        </div>
        <div className="card-content">
          <strong>I am a very simstrongle card. I am good at containing small bits of information.
         </strong>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>

    
  </div>


  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src=" https://picsum.photos/201/300 "/>
          <span className="card-title">Random Image </span>
        </div>
        <div className="card-content">
          <strong>I am a very simstrongle card. I am good at containing small bits of information.
         </strong>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>


  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src=" https://picsum.photos/202/300 "/>
          <span className="card-title">Random Image </span>
        </div>
        <div className="card-content">
          <strong>I am a very simstrongle card. I am good at containing small bits of information.
         </strong>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>


  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src=" https://picsum.photos/203/300 "/>
          <span className="card-title">Random Image </span>
        </div>
        <div className="card-content">
          <strong>I am a very simstrongle card. I am good at containing small bits of information.
         </strong>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src=" https://picsum.photos/204/300 "/>
          <span className="card-title">Random Image </span>
        </div>
        <div className="card-content">
          <strong>I am a very simstrongle card. I am good at containing small bits of information.
         </strong>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
}
