// Copyright (c) 2021 Terminus, Inc.
//
// This program is free software: you can use, redistribute, and/or modify
// it under the terms of the GNU Affero General Public License, version 3
// or later ("AGPL"), as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import React, { ImgHTMLAttributes, LinkHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import './index.scss';

const Link = ({ href, children }: LinkHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" onClick={(e) => e.stopPropagation()}>
      {children}
    </a>
  );
};

interface IMdProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}
export const MarkdownRender = ({ value, className, style }: IMdProps) => {
  const content = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ a: Link }}
    >
      {value}
    </ReactMarkdown>
  );
  return content;
};

export default MarkdownRender;
