import { Modal } from "~/app/_components/modal";
import { getImage } from "~/server/db/queries";

export default async function PhotoModal(props: { params: { id: string } }) {
  const image = await getImage(parseInt(props.params.id));
  return (
    <Modal>
      <img src={image.url} alt="" className="w-96" />
    </Modal>
  );
}
