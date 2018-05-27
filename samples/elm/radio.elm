module Main exposing (..)

import Html exposing (Html, div, button, audio, text)
import Html.Events exposing (onClick)
import Html.Attributes exposing (src, autoplay, controls)

main : Program Never Model Msg
main =
    Html.beginnerProgram
        { view = view
        , model = Model False "http://stream-tx4.radioparadise.com/mp3-192"
        , update = update
        }


type alias Model =
    { playing : Bool
    , src : String
    }


type Msg
    = Play
    | Pause


update : Msg -> Model -> Model
update msg model =
    case msg of
        Play ->
            { model | playing = True }

        Pause ->
            { model | playing = False }


view : Model -> Html Msg
view model =
    if model.playing then
        playingView model
    else
        notPlayingView model


playingView : Model -> Html Msg
playingView model =
    div []
        [ button [ onClick Pause ] [ text "Pause" ]
        , audio [ src model.src, autoplay True, controls True ] []
        ]


notPlayingView : Model -> Html Msg
notPlayingView model =
    button [ onClick Play ] [ text "Play" ]
