import { EncoderState, encoderMap } from '../feature-meta';

export interface URLConfig {
  encoderState?: EncoderState;
  width?: number;
}

function parseInteger(
  value: string | null,
  min: number,
  max = Number.MAX_SAFE_INTEGER,
): number | undefined {
  if (value === null || !/^\d+$/.test(value)) return undefined;

  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < min || number > max) {
    return undefined;
  }

  return number;
}

export function parseURLConfig(searchParams: URLSearchParams): URLConfig {
  const quality = parseInteger(searchParams.get('quality'), 0, 100);
  const effort = searchParams.get('effort');
  const codec = searchParams.get('codec');
  let encoderState: EncoderState | undefined;

  if (codec === 'avif') {
    const parsedEffort = parseInteger(effort, 0, 10);
    encoderState = {
      type: 'avif',
      options: {
        ...encoderMap.avif.meta.defaultOptions,
        ...(quality === undefined ? {} : { quality }),
        ...(parsedEffort === undefined ? {} : { speed: 10 - parsedEffort }),
      },
    };
  } else if (codec === 'webp') {
    const parsedEffort = parseInteger(effort, 0, 6);
    encoderState = {
      type: 'webP',
      options: {
        ...encoderMap.webP.meta.defaultOptions,
        ...(quality === undefined ? {} : { quality }),
        ...(parsedEffort === undefined ? {} : { method: parsedEffort }),
      },
    };
  }

  return {
    encoderState,
    width: parseInteger(searchParams.get('width'), 1),
  };
}
