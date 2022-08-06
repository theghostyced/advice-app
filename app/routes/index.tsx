import type { LoaderFunction } from "@remix-run/node";
import Icon from '~/components/svgs/icon';

import {json} from '@remix-run/node';
import {Form, useLoaderData} from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const response = await (await fetch('https://api.adviceslip.com/advice')).json();

  return json(response);
}

export default function Homepage() {
  const loaderData = useLoaderData();
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <span className="modal-eyebrow">Advice #{loaderData.slip.id}</span>
        <blockquote>"{loaderData.slip.advice}"</blockquote>

        <svg width="444" height="16" viewBox="0 0 444 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="8" width="196" height="1" fill="#4F5D74"/>
          <rect x="248" y="8" width="196" height="1" fill="#4F5D74"/>
          <rect x="212" width="6" height="16" rx="3" fill="#CEE3E9"/>
          <rect x="226" width="6" height="16" rx="3" fill="#CEE3E9"/>
        </svg>

        <Form method="get">
          <button className="modal-button">
            <Icon />
          </button>
        </Form>
      </div>
    </div>
  );
}
