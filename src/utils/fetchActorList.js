import { transformActorData } from './transformActorListData';
import axios from 'axios';

export const fetchActorList = async (id, controller) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    signal: controller.signal,
  });
  const actorData = transformActorData(data);

  return actorData;
};
