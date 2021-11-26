import { call, put, all, takeLatest } from "redux-saga/effects";
import * as action from "./action";
import * as types from "../types";
import Notify from "../../../config/notify";

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(action.clicaBotaoSuccess());
  } catch (error) {
    Notify("error", "Error: ", error);
    yield put(action.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
